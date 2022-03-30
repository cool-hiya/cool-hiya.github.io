export interface Course {
  id: string,
  category: Category,
  name: string,
  source: string
}

export enum Category {
  HTML = 'html',
  JS = 'js',
  CSS = 'css',
  SVG = 'svg',
  WEBPACK = 'webpack',
  CSS_EXTENSIONS = 'css-extensions',
  DESIGN_TOOLS = 'design-tools',
  ANGULAR = 'angular',
  TYPESCRIPT = 'typescript',
  PACKAGE_MANAGERS = 'package-managers',
  DEV_TOOLS = 'dev-tools',
  GIT = 'git',
  START_KIT = 'start-kit'
}
