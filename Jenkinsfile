#!groovy

pipeline {
    agent any
    options {
        buildDiscarder(logRotator([
            daysToKeepStr: '7',
            numToKeepStr: '10'
        ]))
    }
    stages {    
        stage('prueba funciona') {
            steps {
                echo "FUNCIONA"
                }
        }
    }
}
