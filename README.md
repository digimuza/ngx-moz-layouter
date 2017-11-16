<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/digimuza/ngx-moz-layouter/master/demo/src/assets/logo.svg">
</p>

# ngx-moz-layouter - Angular library built with ❤ using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/ngx-moz-layouter.svg)](https://badge.fury.io/js/ngx-moz-layouter)
[![Build Status](https://travis-ci.org/digimuza/ngx-moz-layouter.svg?branch=master)](https://travis-ci.org/digimuza/ngx-moz-layouter)
[![Coverage Status](https://coveralls.io/repos/github/digimuza/ngx-moz-layouter/badge.svg?branch=master)](https://coveralls.io/github/digimuza/ngx-moz-layouter?branch=master)
[![dependency Status](https://david-dm.org/digimuza/ngx-moz-layouter/status.svg)](https://david-dm.org/digimuza/ngx-moz-layouter)
[![devDependency Status](https://david-dm.org/digimuza/ngx-moz-layouter/dev-status.svg?branch=master)](https://david-dm.org/digimuza/ngx-moz-layouter#info=devDependencies)

## Demo

View all the directives in action at https://digimuza.github.io/ngx-moz-layouter

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-moz-layouter` via:
```shell
npm install --save ngx-moz-layouter
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-moz-layouter`:
```js
map: {
  'ngx-moz-layouter': 'node_modules/ngx-moz-layouter/bundles/ngx-moz-layouter.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-moz-layouter';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MozLayoutModule.forRoot()`):
```js
import { LibModule } from 'ngx-moz-layouter';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MozLayoutModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` MozLayoutModule `:

```js
import { LibModule } from 'ngx-moz-layouter';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [MozLayoutModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Andrius Mozūraitis (digimuza.com). Licensed under the MIT License (MIT)

