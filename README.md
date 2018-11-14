# fa-svelte
Fontawesome 5 for svelte.js
## About
A simple minimalistic lightweight svelte component for Font Awesome SVG icons.
* Small footprint 
* Only used icons will be bundled
* No dependencies
* Only SVG (no fonts)
* Does not require additional CSS files 

## Installation 
`npm install fa-svelte`

## Usage

### Basic usage

Using font awesome solid Icons, first install using npm  

`npm install @fortawesome/free-solid-svg-icons`

```
<Icon icon={faCircle}>
</Icon>

<script>
import Icon from 'fa-svelte'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'

export default {
  components: {
    Icon,
  },
  data() {
    return {
      faCircle: faCircle,
    }
  }
}
</script>
```

### Classes
```
<Icon class="myClass1 myClass2" icon={faCircle}>
</Icon>

<script>
import Icon from 'fa-svelte'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'

export default {
  components: {
    Icon,
  },
  data() {
    return {
      faCircle: faCircle,
    }
  }
}
</script>
<style>

:global(.myClass1) {
    color: red;
}

:global(.myClass2) {
    font-size: 14px;
}
</style>
```