module.exports = {
  packagerConfig: {
    asar: true,
    icon: "./assets/icon",
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "my_react_app",
        authors: "Your Name",
        description: "My React Windows App",
      },
    },
  ],
};
