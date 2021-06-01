const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;

const writeFileUsingFS = (
  writeTargetPath: any,
  writeEnvironmentFileContent: any
) => {
  writeFile(writeTargetPath, writeEnvironmentFileContent, (err) => {
    if (err) {
      console.log(err);
    }
    if (writeEnvironmentFileContent !== '') {
      console.log(`wrote variables to ${writeTargetPath}`);
    }
  });
};

// Providing path to the `environments` directory
const envDirectory = './src/environments';

// creates the `environments` directory if it does not exist
if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

// Checks whether command line argument of `prod` was provided signifying production mode
const isProduction = environment === 'prod';

//creates the `environment.prod.ts` and `environment.ts` file if it does not exist
if (isProduction) {
  writeFileUsingFS(`${envDirectory}/environment.prod.ts`, '');
}

// choose the correct targetPath based on the environment chosen
const targetPath = `${envDirectory}/environment.prod.ts`;

//actual content to be compiled dynamically and pasted into respective environment files
const environmentFileContent = `
  export const environment = {
    production: true,
    useEmulators: false,
    firebase: {
      apiKey: ${process.env.FIREBASE_JSON_APIKEY},
      authDomain: ${process.env.FIREBASE_JSON_AUTHDOMAIN},
      projectId: ${process.env.FIREBASE_JSON_PROJECTID},
      storageBucket: ${process.env.FIREBASE_JSON_BUCKET},
      messagingSenderId: ${process.env.FIREBASE_JSON_MSGSENDID},
      appId: ${process.env.FIREBASE_JSON_APPID},
      measurementId: ${process.env.FIREBASE_JSON_MESID}
    }
  };
`;

if (isProduction) {
  writeFileUsingFS(targetPath, environmentFileContent); // appending data into the target file
}
