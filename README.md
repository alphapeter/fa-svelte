# fa-svelte
Fontawesome 5 for svelte.js
## About
A simple wrapper for Fontawesome [core api (icon)](https://fontawesome.com/how-to-use/with-the-api/methods/icon)
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
import Icon from 'fa-svelte'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

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

### Additional Attributes

```
<Icon attributes={attributes} icon={faCircle}>
</Icon>

<script>
import Icon from 'fa-svelte'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    Icon,
  },
  data() {
    return {
      faCircle: faCircle,
      attributes: { 'data-component-id': 987654 }
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
import { faCircle } from '@fortawesome/free-solid-svg-icons'

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
### Use the main icon as a mask for another another icon
```
<Icon icon={faMinus} mask={faCircle}>
</Icon>

<script>
import Icon from 'fa-svelte'
import { faCircle, faMinus } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    Icon,
  },
  data() {
    return {
      faCircle: faCircle,
      faMinus: faMinus
    }
  }
}
</script>
```
### Additional styles

```
<Icon styles={styles} icon={faCircle}>
</Icon>

<script>
import Icon from 'fa-svelte'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    Icon,
  },
  data() {
    return {
      faCircle: faCircle,
      styles: { 'background-color': 'coral' }
    }
  }
}
</script>
```

### Creating a symbol (auto-generating ID)

```
<Icon icon={faCircle} symbol={true}>
</Icon>

<script>
import Icon from 'fa-svelte'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

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

### Creating a symbol (explicit ID)
```
<Icon icon={faCircle} symbol="spinner-icon">
</Icon>

<script>
import Icon from 'fa-svelte'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

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
### Title attribute
```
<Icon icon={faCircle} title="Navigation menu">
</Icon>

<script>
import Icon from 'fa-svelte'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

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
### Transform
```
<Icon icon={faCircle} transform={transform}>
</Icon>

<script>
import Icon from 'fa-svelte'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    Icon,
  },
  data() {
    return {
      faCircle: faCircle,
      transform: {
          size: 8,     // starts at 16 so make it half
          x: -4,       // the same as left-4
          y: 6,        // the same as up-6
          rotate: 90,  // the same as rotate-90
          flipX: true, // the same as flip-h
          flipY: true  // the same as flip-v
        },
    }
  }
}
</script>
```
