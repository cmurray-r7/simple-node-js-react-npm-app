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
            environment {
                TEST_CLIENT_ID = credentials('sf-qa-client-id')
                TEST_CLIENT_SECRET = credentials('sf-qa-client-secret')
                REFRESH_TOKEN = credentials('refresh-token')
                SUPPORT_ENGINEER_REFRESH_TOKEN = credentials('support-engineer-refresh-token')
            }
            steps {
                sh('npx cypress run --config-file cypress.config.js --spec "cypress/e2e/0-demo/*" --env TEST_CLIENT_ID=$TEST_CLIENT_ID,TEST_CLIENT_SECRET=$TEST_CLIENT_SECRET,REFRESH_TOKEN=$REFRESH_TOKEN,SUPPORT_ENGINEER_REFRESH_TOKEN=$SUPPORT_ENGINEER_REFRESH_TOKEN')
            }
        }
        stage('Build') {
            steps {

                // Feature PR: patch version in package.json
                // Release PR: minor version in package.json
                sh 'VERSION=$(npm view . version) && zip -r "build_${VERSION}.zip" dist'
                sh 'ls'
            }
        }
    }
}