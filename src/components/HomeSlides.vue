<template>
  <carousel :perPage="1">
    <slide>
      <div class="white-card">
        <h4 class="color-1">Standard Service Items</h4>
        <p>Recommendation is based on 20,000 KM mileage selection</p>
        <div class="service-items">
          <div
            class="service-item"
            v-for="item in serviceItems"
            :key="item.text"
          >
            <div class="service-item__left">
              <p class="mb-0">
                {{ item.text }}
                <img class="ml-1" src="/img/icons/info.svg" alt="" />
              </p>
            </div>

            <div class="service-item__right">
              {{ item.price }}
            </div>
          </div>

          <div class="service-item mt-2">
            <div class="service-item__left">
              <strong class="mb-0">
                Total
              </strong>
            </div>

            <div class="service-item__right">
              N81,120
            </div>
          </div>
        </div>

        <div class="other-request mt-4">
          Estimate does not cover “Other Request”
        </div>
      </div>
      <h2 class="color-white text-center mt-5">
        Designed for Easy Management
      </h2>
      <p class="text-center color-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Egestas ut quis eget sit semper gravida.
      </p>
    </slide>
    <slide>
      <div class="white-card">
        <h4 class="color-1">Standard Service Items</h4>
        <p>Recommendation is based on 20,000 KM mileage selection</p>
        <div class="service-items">
          <div
            class="service-item"
            v-for="item in serviceItems"
            :key="item.text"
          >
            <div class="service-item__left">
              <p class="mb-0">
                {{ item.text }}
                <img class="ml-1" src="/img/icons/info.svg" alt="" />
              </p>
            </div>

            <div class="service-item__right">
              {{ item.price }}
            </div>
          </div>

          <div class="service-item mt-2">
            <div class="service-item__left">
              <strong class="mb-0">
                Total
              </strong>
            </div>

            <div class="service-item__right">
              N81,120
            </div>
          </div>
        </div>

        <div class="other-request mt-4">
          Estimate does not cover “Other Request”
        </div>
      </div>
      <h2 class="color-white text-center mt-5">
        Designed for Easy Management
      </h2>
      <p class="text-center color-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Egestas ut quis eget sit semper gravida.
      </p>
    </slide>
    <slide>
      <div class="white-card">
        <h4 class="color-1">Standard Service Items</h4>
        <p>Recommendation is based on 20,000 KM mileage selection</p>
        <div class="service-items">
          <div
            class="service-item"
            v-for="item in serviceItems"
            :key="item.text"
          >
            <div class="service-item__left">
              <p class="mb-0">
                {{ item.text }}
                <img class="ml-1" src="/img/icons/info.svg" alt="" />
              </p>
            </div>

            <div class="service-item__right">
              {{ item.price }}
            </div>
          </div>

          <div class="service-item mt-2">
            <div class="service-item__left">
              <strong class="mb-0">
                Total
              </strong>
            </div>

            <div class="service-item__right">
              N81,120
            </div>
          </div>
        </div>

        <div class="other-request mt-4">
          Estimate does not cover “Other Request”
        </div>
      </div>
      <h2 class="color-white text-center mt-5">
        Designed for Easy Management
      </h2>
      <p class="text-center color-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Egestas ut quis eget sit semper gravida.
      </p>
    </slide>
  </carousel>
</template>

<script>
export default {
  data() {
    return {
      serviceItems: [
        {
          text: "Oil Change",
          price: "N24,000"
        },
        {
          text: "Brake Pad",
          price: "N4,000"
        },
        {
          text: "Filter Change",
          price: "N8,560"
        },
        {
          text: "Workmanship",
          price: "N44,560"
        }
      ]
    };
  }
};
</script>

<style>
.slide-content {
  border: 1px solid gray;
  width: 512px;
}

.white-card {
  background: #ffffff;
  border-radius: 30px;
  min-height: 300px;
  padding: 26px 52px;
  color: #58595b;
}

.service-items {
  border: 1px solid #e4e5e7;
  box-sizing: border-box;
  box-shadow: 0px 4px 5px 5px rgba(235, 10, 30, 0.05);
  border-radius: 6px;
  padding: 20px 24px;
}

.service-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(88, 89, 91, 0.1);
  padding: 12px 0;
}

.service-item:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.service-item__left {
}

.service-item__right {
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #58595b;
}

.other-request {
  background: rgba(208, 131, 14, 0.18);
  border-radius: 4px;
  font-size: 12px;
  line-height: 17px;
  color: #d0830e;
  text-align: center;
  margin: 21px 44px 0;
  padding: 2px;
}
</style>
