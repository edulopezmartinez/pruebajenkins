#!groovy

pipeline {
    agent any
    options {
        buildDiscarder(logRotator([
            daysToKeepStr: '7',
            numToKeepStr: '10'
        ]))
    }
        stage('Functional tests') {
            steps {
                script {
                    echo "FUNCIONA"
                }
            }
        }
