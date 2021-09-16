module.exports = {
  displayName: 'pizza-store-ui-pizza-configurator',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/pizza-store/ui-pizza-configurator',
};
