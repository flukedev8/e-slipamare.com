<template>
  <div name="buybot">
    <v-container>
      <v-row id="buyone">
        <v-col cols="12" md="12" sm="12" xs="12" align="center">
          <h1>ซื้อ BOT น้องหญิง e-slipamare</h1>
          <span
            >step: 1 scan QR code ด่านล่างให้เรียบร้อย
            หรือกดปุ่มเพิ่มเพื่อน</span
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
          <span>step: 2 ทำตามคลิปวิธีการลงทะเบียนด้านล่าง</span><br />
          <youtube />
        </v-col>
      </v-row>
      <v-row id="buytwo">
        <v-col cols="12" md="12" sm="12" xs="12" align="center">
          <h1>ซื้อ My BOT</h1>
          <span>step: 1 เตรียมข้อมูลต่างๆดังนี้ </span>
        </v-col>
        <v-col
          cols="12"
          md="12"
          sm="12"
          xs="12"
          align="center"
          justify="center"
        >
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">รายการ</th>
                  <th class="text-left">หมายเหตุ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col cols="12" md="12" sm="12" xs="12" align="center">
          <span>step: 2 ส่งข้อมูลทุกอย่างผ่านทาง Facebook แฟนเพจ </span><br/>
          <p><v-icon>mdi-facebook-box</v-icon> facebook: <a href="https://www.facebook.com/Eslipamare/" target="_blank">E-slipamare</a> </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import youtube from "@/components/buybot/youtubebuy.vue";
export default {
  components: {
    youtube
  },
  data() {
    return {
      desserts: [
        {
          name:
            "1.เตรียมข้อมูลต่างๆเกี่ยวกับร้านค้า หรือ ร้านอาหาร เช่น ชื่อร้าน รูปโปรไฟล์ รูปหน้าปก",
          calories:
            "หากมี line OA อยู่แล้วพร้อมเชื่อม Bot ลด 1,000 บาท สำหรับค่าติดตั้ง"
        },
        {
          name: "2.จัดเตรียม Google sheet",
          calories: "สามารถดูวิธีการเตรียม Google sheet จากคลิปด้านบน"
        },
        {
          name: "3.ระยะเวลาในการติดตั้ง Bot เป็นเวลา 2 วัน หลังการตกลง",
          calories: "เก็บเงินทั้งหมด เมื่อมีการทดสอบ Bot ผ่านแล้วใช้งานได้"
        }
      ]
    };
  }
};
</script>
