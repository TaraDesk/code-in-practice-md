<script>
  const savedTheme = sessionStorage.getItem('theme');

  let theme = $state("theme-1");
  let previousTheme = "theme-1";

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'theme-3';
  } else {
    theme = 'theme-2';
  }

  if (savedTheme) {
    theme = savedTheme;
  }

  $effect(() => {
    document.documentElement.classList.remove(previousTheme);
    document.documentElement.classList.add(theme);
    sessionStorage.setItem('theme', theme);

    previousTheme = theme;
  });
</script>


<header class="header flex flex-jc-sb flex-ai-b">
  <h1 class="title">calc</h1>

  <div class="radio-theme flex flex-ai-c">
    <input type="radio" name="theme" id="theme-1" bind:group={theme} value="theme-1">
    <input type="radio" name="theme" id="theme-2" bind:group={theme} value="theme-2">
    <input type="radio" name="theme" id="theme-3" bind:group={theme} value="theme-3">
  </div>
</header>


<style lang="scss">
  @mixin indicator {
    position: absolute;
    top: -1.625rem;
    left: 40%;
    
    font-size: 0.75rem;
    color: var(--title-color);
    transform: translateX(-50%);
  }

  .header {
    padding-top: 0.75rem;
    margin-bottom: 1.625rem;
  }

  .title {
    line-height: 1.0;
    font-size: 2rem;
    color: var(--title-color);
  }

  .radio-theme {
    position: relative;
    gap: 0.125rem;
    padding: 0.375rem 0.5rem;
    border-radius: 1.5rem;
    background: var(--keypad-bg);

    &::before {
      content: 'THEME';
      position: absolute;
      bottom: 0;
      left: -4.375rem;
      color: var(--title-color);
    }

    input {
      position: relative;
      appearance: none;
      width: 1.25rem;
      height: 1.25rem;
      margin: 0;
      border-radius: 50%;
    }

    input:first-child::before {
      content: '1';
      @include indicator;
    }

    input:nth-child(2)::before {
      content: '2';
      @include indicator;
    }

    input:last-child::before {
      content: '3';
      @include indicator;
    }

    input:checked {
      background-color: var(--key-bg-two);
    }
  }
</style>