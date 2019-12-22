<template>
  <section>
    <v-container>
      <section>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" sm="6" xs="12" justify="center">
            <h3 class="headline font-weight-black">ความสามารถของ BOT</h3>
            <p>
              BOT มีความสามารถดังนี้ 
            </p>
            <ui>
              <li>บอกได้ว่า E-slip นี้เป็นของธนาคารใด เพื่อง่ายต่อการตวจสอบย้อนหลัง</li>
              <li>บอกได้ว่า E-slip นี้มีการทำธุรกรรม วันที่และเวลาใด ใช้เป็นหลักฐานในการตรวจสอบ</li>
              <li>บอกได้ว่า จำนวนเงินที่อยู่บน Silp นั้นเป็นจำนวนเงินเท่าใด เพื่อสะดวกในการสรุปยอดบัญชีในแต่ละวัน</li>
              <li>สามารถค้นหา หมายเลขอ้างอิงใช้ตรวจสอบ เพื่อสะดวกในการตรวจสอบย้อนหลัง</li>
            </ui>
          </v-col>
          <v-col
            cols="12"
            md="6"
            sm="6"
            xs="12"
            align="center"
            justify="center"
          >
            <v-img
              src="../../assets/img/darw/undraw_chat_bot_kli5.svg"
              aspect-ratio="1.7"
              max-width="600"
              max-height="500"
            ></v-img>
          </v-col>
        </v-row>
      </section>
      <section>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" sm="6" xs="12" align="left">
            <v-img
              src="../../assets/img/darw/undraw_security_o890.svg"
              aspect-ratio="1.3"
              max-width="500"
              max-height="500"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6" sm="6" xs="12" justify="center">
            <h3 class="headline font-weight-black">ความปลอดภัยของข้อมูล</h3>
            <p>
              ข้อมูลของ E-slip ที่มีการส่งไปให้ BOT จัดเก็บนั้นจะถูกจัดเก็บลง google sheet ของท่านลูกค้า
              ดังนั้น ข้อมูลจะถูกจัดเก็บไว้ในมือของท่าน 
            </p>
          </v-col>
        </v-row>
      </section>
      <section>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" sm="6" xs="12" justify="center">
            <h3 class="headline font-weight-black">ประหยัดเวลา ⌚⏰</h3>
            <p>
              การมี BOT ช่วยเก็บข้อมูลธุรกรรมที่มีการโอนเข้าออกใน ร้านค้า หรือ ร้านขายของ ของท่านทำให้ท่านไม่ต้องมากรอกหรือเปิดรูปภาพที่ละรูป
              ประหยัดเวลาในการตรวจสอบ หรือ สรุปยอดเงินในแต่ละวัน ได้ง่ายดายยิ่งขึ้น
            </p>
          </v-col>
          <v-col cols="12" md="6" sm="6" xs="12" align="left">
            <v-img
              src="../../assets/img/darw/undraw_business_shop_qw5t.svg"
              aspect-ratio="1.3"
              max-width="500"
              max-height="500"
            ></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({})
};
</script>
