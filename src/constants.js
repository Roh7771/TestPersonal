"use strict";

exports.DEFAULT_COMMAND = `--help`;

exports.USER_ARGV_INDEX = 2;

exports.ExitCode = {
  ERROR: 1,
  SUCCESS: 0,
};

exports.DataFileName = {
  titles: `data/titles.txt`,
  categories: `data/categories.txt`,
  sentences: `data/sentences.txt`,
};

exports.HELP_MESSAGE = `
Программа запускает http-сервер и формирует файл с данными для API.

  Гайд:
  service.js <command>

  Команды:
  --version:            выводит номер версии
  --help:               печатает этот текст
  --generate <count>    формирует файл mocks.json
`;

exports.DEFAULT_PUBLICATION_AMOUNT = 1;

exports.MAX_PUBLICATION_AMOUNT = 1000;

exports.MAX_ANNOUNCE_SIZE = 5;

exports.MAX_FULL_DESCR_SIZE = 30;

exports.MOCKS_FILE_NAME = `mocks.json`;

