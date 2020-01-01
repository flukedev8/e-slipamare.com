<template>
  <section>
    <v-container>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="12"
          sm="12"
          xs="12"
          align="center"
          justify="center"
        >
          <h3 class="display-2 font-weight-light">Price (ราคา)</h3>
          <span>รายละเอียดราคาของ bot ต่างๆในแต่ละประเภท</span>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" sm="4" xs="12" align="center" justify="center">
          <v-card max-width="344" shaped elevation="20"  >
            <v-card-text>
              <p class="display-1 text--primary">น้องหญิง <br />E-slipamare</p>
              <p>รายละเอียด</p>
              <div class="text--primary">
                <ui>
                  <li>ตรวจจับข้อมูลต่างๆบน E-slip ได้</li>
                  <li>google sheet เป็นของคนเช่า</li>
                  <li>ไม่ต้อง มี server เป็นของตัวเอง</li>
                  <li>แชร์ทรัพยากรใช้งานร่วมกับคนอื่นๆ</li>
                  <li>ต้องมีคน Monitor ส่ง E-slip ให้น้องหญิง</li>
                </ui>
              </div>
              <br/>
              <p>ราคา</p>
              <div class="headline">
                  300 บาท/ 30วัน<br/>
                  หรือ 10 บาท/วัน
              </div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn  color="primary" to="/buybot">
                ดูรายละเอียด/สั่งซื้อ BOT
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="4" xs="12" align="center" justify="center">
          <v-card max-width="344" shaped elevation="20">
            <v-card-text>
              <p class="display-1 text--primary">
                  My BOT
              </p>
              <p>รายละเอียด</p>
              <div class="text--primary">
                <ui>
                  <li>ตรวจจับข้อมูลต่างๆบน E-slip ได้</li>
                  <li>google sheet เป็นของคนเช่า</li>
                  <li> มี server เป็นของตัวเอง</li>
                  <li>สามารถทำการตลาดโปรโมท <br> โปรโมชั่นไปหาลูกค้าของท่านได้</li>
                  <li>ไม่ต้องมีคน Monitor<br/>ลูกค้าของท่านส่งให้ BOT โดยตรง</li>
                </ui>
              </div>
               <br/>
              <p>ราคา</p>
              <div class="headline">
                  800 บาท/30 วัน<br/>
                  3,900 /6 เดือน <br/>
                  <p class="overline">หมายเหตุ มีค่าติดตั้ง 2,500 บาท จ่ายครั้งเดียว</p>
              </div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn  color="primary" to="/buybot">
                ดูรายละเอียด/สั่งซื้อ BOT
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="4" xs="12" align="center" justify="center">
          <v-card max-width="344" shaped elevation="20" disabled>
            <v-card-text>
              <p class="display-1 text--primary">
                Custom BOT
              </p>
              <p>รายละเอียด</p>
              <div class="text--primary">
                <ui>
                  <li>ตรวจจับข้อมูลต่างๆบน E-slip ได้</li>
                  <li>google sheet เป็นของคนเช่า</li>
                  <li> มี server เป็นของตัวเอง</li>
                  <li>ความสามารถอื่นๆสามารถ<br/>เพิ่มได้ตามความต้องการ</li>

                </ui>
              </div>
                 <br/>
              <p>ราคา</p>
              <div class="headline">
                  อยู่ที่ความต้องการ<br/>
                  ราคาเริ่มต้น 5,000 บาท
                  <p class="overline">หมายเหตุ สามารถพูดคุยเรื่องราคาได้</p>
              </div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn  color="primary" to="/buybot">
                ดูรายละเอียด/สั่งซื้อ BOT
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({})
};
</script>
