module.exports = {
  displayName: 'pizza-store-feature-payment-gateway',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../coverage/libs/pizza-store/feature-payment-gateway',
};
