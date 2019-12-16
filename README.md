# fa-svelte
[Fontawesome 5](https://fontawesome.com/) for [svelte v3.x](https://svelte.dev/) 

(For svelte v2, use fa-svelte v1.x.x)
## About
A simple minimalistic lightweight svelte component for Font Awesome SVG icons.
* Small footprint 
* Only used icons will be bundled
* No dependencies
* Only SVG (no fonts)
* Does not require additional CSS files 

This library is currently not intended to be fully featured, it is the option when size and speed is of importance.


## Installation 
Install as a development dependency

`npm install -D fa-svelte`

## Usage

### Basic usage

Using font awesome solid Icons, first install them using npm  

`npm install @fortawesome/free-solid-svg-icons`

```html
<Icon icon={icon}>
</Icon>

<script>
import Icon from 'fa-svelte'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'

let icon = faCircle;
</script>
```

### Classes
```html
<div>
  <Icon class="myClass1 myClass2" icon={faCircle}>
  </Icon>
</div>

<script>
import Icon from 'fa-svelte'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'

let icon = faCircle;
</script>
<style>

div :global(.myClass1) {
    color: red;
}

div :global(.myClass2) {
    font-size: 14px;
}
</style>
```

## Configuring webpack

If you're using webpack with [svelte-loader](https://github.com/sveltejs/svelte-loader), 
make sure that you add `"svelte"` to 
[`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in 
your webpack config. This ensures that webpack imports the uncompiled component (`src/Icon.svelte`) 
rather than the compiled version (`index.js`) — this is more efficient and will also resolve component 
crash in runtime.  

For a working web pack example, look at [examples/webpack](https://github.com/alphapeter/fa-svelte/tree/master/examples/webpack)  

## Credits

This component is based on the [template](https://github.com/sveltejs/component-template) 
provided by [sveltejs](https://github.com/sveltejs) 
