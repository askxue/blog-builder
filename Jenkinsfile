pipeline {
    agent {
        docker {
            image 'node:12.22.10-alpine3.15'
            args '-v $HOME/.m2:/root/.m2'
        }
    }
    stages {
        stage('checkout') {
            steps {
               checkout(
                 [
                    $class: 'GitSCM',
                    branches: [[name: 'main']],
                    extensions: [],
                    userRemoteConfigs: [
                      [credentialsId: 'gitee_account', url: 'https://gitee.com/xs1990582233/blog-builder.git']
                    ]
                 ]
               )
            }
        }
        stage('build') {
            steps {
                sh 'git submodule update --init --recursive'
                sh 'npm install'
                sh 'npm install -g hexo-cli'
                sh 'hexo g -f'
                sh 'cp -rf public  ../../www'
            }
        }
    }
}
