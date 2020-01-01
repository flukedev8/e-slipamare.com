<template>
<div name="buybot">
  <v-container>
    <v-row>
      <v-col cols="12" md="12" sm="12" xs="12" align="center">
        <h1>ซื้อ BOT น้องหญิง e-slipamare</h1>
        <span
          >step: 1 scan QR code ด่านล่างให้เรียบร้อย หรือกดปุ่มเพิ่มเพื่อน</span
        >
      </v-col>
      <v-col cols="12" md="6" sm="6" xs="12" align="center" justify="center">
        <p>
          Scan เพื่อรับ Bot e-slipamare เพื่อใช้ในการลงทะเบียน
          เพิ่มเงินและติดต่อสอบถาม
        </p>
        <img src="https://qr-official.line.me/sid/M/622nprzo.png" /> <br />
        <a href="https://lin.ee/alpkzdH"
          ><img
            src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png"
            alt="เพิ่มเพื่อน"
            height="36"
            border="0"
        /></a>
      </v-col>
      <v-col cols="12" md="6" sm="6" xs="12" align="center" justify="center">
        <p>Scan เพื่อรับ Bot น้องหญิง เพื่อใช้ในการอ่าน E-slip</p>
        <img src="https://qr-official.line.me/sid/M/135lpbeh.png" /> <br />
        <a href="https://lin.ee/oSEE9ag"
          ><img
            src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png"
            alt="เพิ่มเพื่อน"
            height="36"
            border="0"
        /></a>
      </v-col>
      <v-col cols="12" md="12" sm="12" xs="12" align="center">
        <span>step: 2 ทำตามคลิปวิธีการลงทะเบียนด้านล่าง</span><br/>
        <youtube/>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import youtube from '@/components/buybot/youtubebuy.vue'
export default {
  components: {
    youtube
  },
  data: () => ({

  })
};
</script>
