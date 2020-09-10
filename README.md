# babel-preset-react
Babel preset for react project

## Install

```
yarn add -D @pohodnik/babel-preset-react
```
or

```
npm install --save-dev @pohodnik/babel-preset-react
```

## Usage

in *.babelrc* file

```
{
	"presets": ["@pohodnik/babel-preset-react"]
}
```

### Adding Typescript (Optional)
```
yarn add -D @babel/preset-typescript
```

in *.babelrc*
```
{
	"presets": [
		"@pohodnik/babel-preset-react",
		"@babel/preset-typescript"
	]
}
```
