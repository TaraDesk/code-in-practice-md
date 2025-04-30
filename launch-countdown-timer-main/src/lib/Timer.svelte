<script>
  const targetTime = new Date();
  targetTime.setDate(targetTime.getDate() + 14);
  let remainingTime = $state(calculateRemainingTime(targetTime - Date.now()));

  function calculateRemainingTime(time) {
    let remainingDay = Math.floor(time / (1000 * 60 * 60 * 24));
    let remainingHour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let remainingMinute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let remainingSecond = Math.floor((time % (1000 * 60)) / 1000);

    return {
      day: remainingDay,
      hour: remainingHour,
      minute: remainingMinute,
      second: remainingSecond
    }
  }

  setInterval(() => {
    remainingTime = calculateRemainingTime(targetTime - Date.now())
  }, 1000);

</script>

<div class="time-blocks flex flex-jc-sb flex-ai-c">
  <div class="days block">
    <div class="time flex flex-col flex-ai-c">
      <div class="top-half">
        <span>{remainingTime.day}</span>
      </div>
      <div class="bottom-half">
        <span>{remainingTime.day}</span>
      </div>
    </div>
    <p>Days</p>
  </div>

  <div class="hour block">
    <div class="time flex flex-col flex-ai-c">
      <div class="top-half">
        <span>{remainingTime.hour}</span>
      </div>
      <div class="bottom-half">
        <span>{remainingTime.hour}</span>
      </div>
    </div>
    <p>Hours</p>
  </div>

  <div class="minute block">
    <div class="time flex flex-col flex-ai-c">
      <div class="top-half">
        <span>{remainingTime.minute}</span>
      </div>
      <div class="bottom-half">
        <span>{remainingTime.minute}</span>
      </div>
    </div>
    <p>Minutes</p>
  </div>

  <div class="second block">
    <div class="time flex flex-col flex-ai-c">
      <div class="top-half">
        <span>{remainingTime.second}</span>
      </div>
      <div class="bottom-half">
        <span>{remainingTime.second}</span>
      </div>
    </div>
    <p>Seconds</p>
  </div>
</div>


<style lang="scss">
  @import '../styles';

  .time-blocks {
    width: 100%;

    .block {
      width: 4.5rem;      

      @media (min-width: 47.25rem) {
        width: 9.188rem;
      }
    }

    p {
      font-size: 0.5rem;
      letter-spacing: 30%;
      text-align: center;

      @media (min-width: 47.25rem) {
        font-size: 1rem;
        margin-top: 0.75rem;
      }
    }
  }

  .time {
    position: relative;
    width: 100%;
    height: 4.125rem;
    font-size: 2.125rem;
    text-align: center;

    @media (min-width: 47.25rem) {
      font-size: 5.125rem;
      height: 8.625rem;
    }
    
    &::before {
      @include notches('left');
    }

    &::after {
      @include notches('right');
    }

    div {
      width: 100%;
      height: 50%;
      padding-left: 0.813rem;
      padding-right: 0.813rem;
      border-radius: 0.375rem;
    }

    .top-half {
      z-index: 1;
      background-color: hsl(240, 21%, 22%);
      color: hsl(344, 59%, 57%);

      span {
        position: relative;
        top: 0.688rem;

        @media (min-width: 47.25rem) {
          top: 0.875rem;
        }
      }
    }

    .bottom-half {
      z-index: 2;
      background-color: var(--card-background);
      overflow: hidden;
      color: var(--primary-color);

      span {
        position: relative;
        bottom: 1.375rem;

        @media (min-width: 47.25rem) {
          bottom: 3.438rem;
        }
      }
    }
  }  
</style>