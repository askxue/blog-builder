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
              checkout([$class: 'GitSCM', branches: [[name: 'main']], extensions: [[$class: 'SubmoduleOption', disableSubmodules: false, parentCredentials: true, recursiveSubmodules: true, reference: '', trackingSubmodules: true]], userRemoteConfigs: [[credentialsId: 'gitee_account', url: 'https://gitee.com/xs1990582233/blog-builder.git']]])
            }
        }
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm install -g hexo-cli'
                sh 'hexo g -f'
                sh 'gulp'
                sh 'cp -rf public  ../../www'
            }
        }
    }
}
