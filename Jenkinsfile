pipeline {
    agent none

    stages {
        stage('Checkout') {
            steps {
                git branch: 'feature-dashboard', credentialsId: 'git-threepoints-github', url: 'https://github.com/mpcevallos/mmc-tfm'
            }
        }

        stage('Análisis estático de código fuente con SonarQube') {
            steps {
                script {
                    def scannerHome = tool 'sonar-scanner'
                    withSonarQubeEnv(credentialsId:'sonar-token') {
                        sh """
                            ${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=sonarqube \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://localhost:9000 \
                            -Dsonar.login=sqp_8871e861546564ca35025574380ccc281e056c0c
                        """
                    }
                    timeout(time: 1, unit: 'HOURS') {
                        waitForQualityGate abortPipeline: false
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline exitoso'
        }
        failure {
            echo 'Pipeline fallido'
        }
    }
}
