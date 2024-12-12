import { defineConfig } from "cypress";
const mochawesomeMerge = require('mochawesome-merge');  // Импортируем правильно
const mochawesomeReportGenerator = require('mochawesome-report-generator');
require('dotenv').config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.PERCY_TOKEN = process.env.PERCY_TOKEN;
      require('cypress-mochawesome-reporter/plugin')(on);

      on('after:run', async () => { 
        try {
          // Мержим отчеты в один JSON
          const mergedJson = await mochawesomeMerge.merge({
            files: ['cypress/results/*.json'],
          });
      
          // Генерация HTML отчета
          mochawesomeReportGenerator.create(mergedJson, {
            reportDir: 'cypress/results',
            reportFilename: 'final-report.html',
          });
      
          console.log('HTML отчет успешно сгенерирован!');
      
          // Удаляем промежуточные файлы
          const fs = require('fs');
          const path = require('path');
          
          // Удаляем все JSON файлы
          const jsonFiles = fs.readdirSync('cypress/results').filter(file => file.endsWith('.json'));
          jsonFiles.forEach(file => fs.unlinkSync(path.join('cypress/results', file)));
      
          // Удаляем старые HTML файлы
          const htmlFiles = fs.readdirSync('cypress/results').filter(file => file.endsWith('.html') && file !== 'final-report.html');
          htmlFiles.forEach(file => fs.unlinkSync(path.join('cypress/results', file)));
      
          console.log('Лишние файлы удалены.');
      
        } catch (error) {
          console.error('Ошибка при слиянии отчетов:', error);
        }
      });
      

      return config;
    },
    baseUrl: 'https://automationexercise.com',
    video: false, 
    screenshotOnRunFailure: true, 
    supportFile: 'cypress/support/commands.ts', 
    reporter: 'mochawesome',  // Устанавливаем репортер Mochawesome
    reporterOptions: {
      reportDir: 'cypress/results',  // Папка для отчетов
      overwrite: true,  // Перезаписывать отчеты
      html: true,  // Генерация HTML отчета
      json: true,  // Генерация JSON отчета
      timestamp: 'yyyy-mm-dd HH:MM:ss',  // Время в отчетах
    }
  },
  // Настройка для Percy
  env: {
    PERCY_TOKEN: process.env.PERCY_TOKEN 
  },
});
