pipeline {
    agent {
        docker {
            image 'cypress/browsers:node-16.18.1-chrome-110.0.5481.96-1-ff-109.0-edge-110.0.1587.41-1' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Configure') { 
            steps {
                sh 'npm install' 
                sh 'npx eslint --config ./.eslintrc.js'
                sh 'npx cypress install'
            }
        }
        stage('Lint') {
            steps {
                sh 'npx eslint ./src/*'
            }
        }
        stage('Test') {
            steps {
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