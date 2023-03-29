pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Configure') { 
            steps {
                sh 'npm install' 
                sh 'npx eslint --config ./.eslintrc.js'
            }
        }
        stage('Lint') {
            steps {
                sh 'npx eslint ./src/*'
            }
        }
        // stage('Test') {
        //     steps {
        //         sh './jenkins/scripts/test.sh'
        //     }
        // }
        // stage('Build') {
        //     steps {
        //         sh './jenkins/scripts/test.sh'
        //     }
        // }
    }
}