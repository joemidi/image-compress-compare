# Tiny Images

Use the [TinyPNG](https://tinypng.com/) API to compress your images.

You will need to [sign up](https://tinypng.com/developers) to TinyPNG as a developer to obtain an API key.

## Usage
Install dependencies using:
```
npm install
```

You can either set your API Key within the [gulpfile](gulpfile.js) or place it as an environment variable.

Place the files you want to compress in the images folder.

Then run the gulp task:
```
gulp tinify
```

### Setting your API key

First you need to set your key as a SHELL variable:
```
TINYPNG=YOUR_API_KEY
```

Then export it for use in node:
```
export TINYPNG
```
