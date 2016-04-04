# Deco Components

### What are Deco Components?

Deco Components are templates and dependencies that can be downloaded and inserted into your project through the Deco IDE.

Currently, templates are snippets of JSX with associated metadata. This metadata is used to identify important properties and build up the Deco UI for quickly tweaking the component.

Metadata files should not be created manually - they are created automatically in Deco as you add properties to the property panel through <kbd>⌘</kbd> + click.

### Contributing Components

Want to add components to Deco?

Please submit a pull request which adds your component(s) to the `package.json`, following the schema described below.

For now, we'll review every component to make sure it works as expected in Deco. We plan to expand on the schema and make the "registry" more scalable moving forward :)

### FAQ

##### What about native modules?

* We plan to at least automatically run `rnpm link` after the `npm install` succeeds. Unfortunately, these components won't be able to hot reload in the simulator. Maybe there's more we can do here to make inserting native modules just as awesome as inserting pure-JS components.

##### What about components that aren't JSX / React Native?

* We plan to support other kinds of templates and frameworks. The format and IDE are agnostic to the kind of data and dependencies, but to keep it simple, we're limiting components to React-Native-compatible JSX for now.

### Component Schema

```javascript
{
  // (String) Component name
  "name": "Activity Indicator IOS",

  // (String) Component publisher
  "publisher": "deco",

  // (String) Semver string of the component schema
  "schemaVersion": "0.0.1",

  // (String[]) Searchable tags
  "tags": ["core", "ui", "react-native"],

  // (String) Image to display in the insert menu
  "thumbnail": "https://placehold.it/100/100",

  // (String) A brief description
  "description": "A React Native component",

  // (Object) Metadata for the property inspector
  "inspector": {

    // (String) Automatically group properties - can be overriden individually
    "group": "ACTIVITY INDICATOR IOS"

  },

  // (Object) Where to find the component's text/metadata
  "template": {

    // (String) URL or relative path to the component's text
    "text": "https://rawgit.com/dabbott/deco-packages-test/master/core/ActivityIndicatorIOS.jsx",

    // (String) URL or relative path to the component's metadata
    "metadata": "https://rawgit.com/dabbott/deco-packages-test/master/.deco/core/ActivityIndicatorIOS.jsx.deco"
  },

  // (Object) Imports to insert at the top of the file
  "imports": {

    // (String|String[]|Object)
    // => import React from "react-native"
    "react-native": "React",

    // (String|String[]|Object)
    // => import { ActivityIndicatorIOS } from "react-native-2"
    "react-native-2": [

      // (String) Member to import
      "ActivityIndicatorIOS"

    ],

    // (String|String[]|Object)
    // => import React, * as R, { View, Text as T } from "react-native-3"
    "react-native-3": {

      // (String) Default import name
      default: 'React',

      // (Boolean) Should include *
      star: true,

      // (String) Alias for *
      alias: 'R',

      // ((String|Object)[])
      members: [

        // (String) Member to import
        'View',

        {
          // (String) Member to import
          name: 'Text',

          // (String) Alias for imported member
          alias: 'T'
        }

      ]

    }

  },

  // (Object) Dependencies to install
  "dependencies": {

    // (String) Will run `npm install react-native --save`
    "react-native": "*"

  },
}
```

