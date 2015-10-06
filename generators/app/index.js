'use strict';
var yeoman = require('yeoman-environment');
var env = yeoman.createEnv();
var chalk = require('chalk');
var yosay = require('yosay');

// Provide a generator constructor. You need to provide a namespace manually
var evolutionGenerator = yeoman.generators.Base.extend({
  promptUser: function() {
      var done = this.async();

      // have Yeoman greet the user
      this.log(yosay('Welcome to the amazing ' + chalk.red('Evolution 3.0.1 boilerplate') + ' generator!'));

      var prompts = [{
          name: 'appName',
          message: 'What is your app\'s name ?'
      },{
          type: 'list',
          name: 'addProductFamily',
          message: 'Please select a Product Family boilerplate:',
          choices : ['Evolution Standard Boilerplate', 'Evolution Communication Sites Boilerplate', 'Evolution Employee Portals Boilerplate' ]
      }];

      this.prompt(prompts, function (props) {
          this.appName = props.appName;
          this.addProductFamily = props.addProductFamily;
 
          done();
      }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('Gruntfile.tpl.js'),
        this.destinationPath('Gruntfile.js')
      );
      this.fs.copy(
        this.templatePath('.ftppass'),
        this.destinationPath('.ftppass')
      );
      this.fs.copy(
        this.templatePath('favicon.ico'),
        this.destinationPath('favicon.ico')
      );
      this.fs.copy(
        this.templatePath('design/'),
        this.destinationPath('design/')
      );
      this.fs.copy(
        this.templatePath('assets/fonts'),
        this.destinationPath('assets/fonts/')
      );
      this.fs.copy(
        this.templatePath('models/'),
        this.destinationPath('models/')
      );
    }
  },

  generateProductFamily: function(){
      if (this.addProductFamily) {
        var context = {
            content: "Evolution Standard Boilerplate"
        }   
      this.fs.copy(
        this.templatePath('assets/css/'),
        this.destinationPath('assets/css/')
      );
      this.fs.copy(
        this.templatePath('assets/scripts/'),
        this.destinationPath('assets/scripts/')
      );
      this.fs.copy(
        this.templatePath('assets/images/'),
        this.destinationPath('assets/images/')
      );
      this.fs.copy(
        this.templatePath('templates/'),
        this.destinationPath('templates/')
      );
      this.fs.copy(
        this.templatePath('templates/includes/'),
        this.destinationPath('templates/includes/')
      );
      this.fs.copy(
        this.templatePath('templates/layouts/'),
        this.destinationPath('templates/layouts/')
      );
    } else if (this.addProductFamily) {
        var context = {
            content: "Evolution Communication Sites Boilerplate"
        }   
      this.fs.copy(
        this.templatePath('assets/css/comm/'),
        this.destinationPath('assets/css/')
      );
      this.fs.copy(
        this.templatePath('assets/scripts/comm/'),
        this.destinationPath('assets/scripts/')
      );
      this.fs.copy(
        this.templatePath('assets/images/comm/'),
        this.destinationPath('assets/images/')
      );
      this.fs.copy(
        this.templatePath('templates/comm/'),
        this.destinationPath('templates/')
      );
      this.fs.copy(
        this.templatePath('templates/includes/comm/'),
        this.destinationPath('templates/includes/')
      );
      this.fs.copy(
        this.templatePath('templates/layouts/comm/'),
        this.destinationPath('templates/layouts/')
      );
    } else if (this.addProductFamily) {
        var context = {
            content: "Evolution Employee Portals Boilerplate",
        }
      this.fs.copy(
        this.templatePath('assets/css/ee/'),
        this.destinationPath('assets/css/')
      );
      this.fs.copy(
        this.templatePath('assets/scripts/ee/'),
        this.destinationPath('assets/scripts/')
      );
      this.fs.copy(
        this.templatePath('assets/images/ee/'),
        this.destinationPath('assets/images/')
      );
      this.fs.copy(
        this.templatePath('templates/ee/'),
        this.destinationPath('templates/')
      );
      this.fs.copy(
        this.templatePath('templates/includes/ee/'),
        this.destinationPath('templates/includes/')
      );
      this.fs.copy(
        this.templatePath('templates/layouts/ee/'),
        this.destinationPath('templates/layouts/')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }

});

//module.exports = evolutionGenerator;

//Register generator
env.registerStub(evolutionGenerator, 'npm:app');

//Your environment is ready to run
env.run('npm:app', done);
