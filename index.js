const { createWorker } = require('tesseract.js');
const getUserInput = require('./utils/getInput');


(async () => {
  const worker = await createWorker('eng');
  console.log("Here are the jobs you can read its job requirements: \n 1.Android Developers\n2.Dotnet Developers\n3.Frontend Developers\n4.IOS Developers\n5.Java Lead\n6.Java Developers\n7.Nodejs Developers\n8.QA Engineer\n");
  let userInput = await getUserInput('Please enter the number of job you want to apply for to see its job requirement: ');
  userInput = parseInt(userInput);
  let imageName = "";
  if(userInput === 1){
    imageName = "android.jpeg";
  }
  else if(userInput === 2){
    imageName = "dotnet.jpeg";
  }
  else if(userInput === 3){
    imageName = "frontend.jpeg";
  }
  else if(userInput === 4){
    imageName = "ios.jpeg";
  }
  else if(userInput === 5){
    imageName = "java_lead.jpeg";
  }
  else if(userInput === 6){
    imageName = "java.jpeg";
  }
  else if(userInput === 7){
    imageName = "nodejs.jpeg";
  }
  else if(userInput === 8){
    imageName = "qa.jpeg";
  }
  else{
    console.log("Invalid input");
  }
  const ret = await worker.recognize('imgs/'+imageName);
  console.log(ret.data.text);
  console.log("You can submit cv to their email address : careers@codigo.co");
  console.log("This app is craeted by : nyilynnhtwe@gmail.com @2024");
  await worker.terminate();
})();