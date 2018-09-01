# fa-svelte
Fontawesome 5 for svelte.js
## About
A simple lightweight svelte component for Font Awesome SVG icons.
* Small footprint 
* Only used icons will be bundled
* No dependencies
* Only SVG (no fonts)
* Does not require additional CSS files 

## installation 
`npm install git+https://github.com/alphapeter/fa-svelte.git`

## Usage

### Basic usage

Using font awesome solid Icons, first install using npm  

`npm install @fortawesome/free-solid-svg-icons`

```
<Icon icon={faCircle}>
</Icon>

<script>
import Icon from 'fa-svelte/Icon.html'
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
import Icon from 'fa-svelte/Icon.html'
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

### Title attribute
```
<Icon icon={faCircle} title="Navigation menu">
</Icon>

<script>
import Icon from 'fa-svelte/Icon.html'
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