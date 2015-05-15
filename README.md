# cucumberjs-example
my attempt at using cucumber js for testing as a lightweight framework
then a jasmine attempt at creating the same test
then finally a mocha attempt

# Preparation

* Install required packages specified in package.json:

```
       npm install
```

# Running the tests

## For cucumber

* To run default:

```
     ./node_modules/cucumber/bin/cucumber.js
```
* For help:

```
     ./node_modules/cucumber/bin/cucumber.js -h
```

* for default run:

```
     ./node_modules/cucumber/bin/cucumber.js -f json
```

* For summary:

```
     ./node_modules/cucumber/bin/cucumber.js -f summary
```

## For Mocha

* Note: tests are in test directory by default

* just type `mocha` at root of project:

```
      mocha 
```

## For Jasmine

* Note: tests are in the spec directory

* just type 'jasmine' at root of project:

```
      jasmine
```
