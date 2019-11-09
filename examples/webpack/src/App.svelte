<script>
import Icon from 'fa-svelte'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faIcons } from '@fortawesome/free-solid-svg-icons/faIcons'
</script>

<style>
  div :global(.red) {
    color: red;
  }

  div :global(.sizeFifty) {
    font-size: 50px;
  }
</style>

<div>
  <h1>Webpack example</h1>
  <h2>Icons</h2>
  <Icon class="sizeFifty" icon={faIcons}/>
  <Icon class="red sizeFifty" icon={faCircle}/>
  <Icon icon={faIcons}/>
</div>


