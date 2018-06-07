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
        
        stage('prueba funciona2') {
            steps {
                echo "FUNCIONA2"
                }
        }
        
        stage('Unit tests') {
            steps {
                withPythonEnv('python3.5') {
                    script {
                        pysh 'pip3 install -r requirements.txt'
                        pysh 'pip install -e .'
                        sh 'python3.5 test_all.py'
                    }
                }
            }
}
               
        
        
        
        
    }
}
