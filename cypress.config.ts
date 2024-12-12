import { defineConfig } from "cypress";
const mochawesomeMerge = require('mochawesome-merge');
const mochawesomeReportGenerator = require('mochawesome-report-generator');
require('dotenv').config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Настройка Percy токена
      config.env.PERCY_TOKEN = process.env.PERCY_TOKEN;
      
      // Подключаем плагин Mochawesome Reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      // После запуска тестов, генерируем финальный отчет
      on('after:run', async () => {
        try {
          // Получаем все файлы JSON отчетов
          const fs = require('fs');
          const path = require('path');
          const resultsDir = path.join(__dirname, 'cypress', 'results');
          
          // Проверяем, есть ли JSON файлы в папке результатов
          const jsonFiles = fs.readdirSync(resultsDir).filter(file => file.endsWith('.json'));
          if (jsonFiles.length === 0) {
            console.log("Не найдено JSON отчетов!");
            return;
          }

          // Мержим JSON файлы в один
          const mergedJson = await mochawesomeMerge.merge({
            files: jsonFiles.map(file => path.join(resultsDir, file)),
          });

          // Генерация финального HTML отчета
          await mochawesomeReportGenerator.create(mergedJson, {
            reportDir: resultsDir,
            reportFilename: 'final-report.html',
          });

          console.log('HTML отчет успешно сгенерирован!');

        } catch (error) {
          console.error('Ошибка при слиянии отчетов:', error);
        }
      });

      return config;
    },
    baseUrl: 'https://automationexercise.com',  // Указываем базовый URL для тестов
    video: false,  // Отключаем видео
    screenshotOnRunFailure: true,  // Скриншоты при сбоях тестов
    supportFile: 'cypress/support/commands.ts',  // Путь к файлу с поддерживающими командами
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
    PERCY_TOKEN: process.env.PERCY_TOKEN,
  },
});
