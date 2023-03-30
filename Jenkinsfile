pipeline {
    agent {
        docker {
            image 'node:16.19-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Configure') { 
            steps {
                sh 'apt-get install xvfb'
                sh 'npm install' 
                sh 'npx eslint --config ./.eslintrc.js'
            }
        }
        stage('Lint') {
            steps {
                sh 'npx eslint ./src/*'
            }
        }
        stage('Test') {
            steps {
                sh 'npx cypress install'
                sh 'npx cypress run --config-file cypress.config.js --spec "cypress/e2e/0-demo/*"'
            }
        }
        // stage('Build') {
        //     steps {
        //         sh './jenkins/scripts/test.sh'
        //     }
        // }
    }
}