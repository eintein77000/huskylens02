maqueenPlusV2.I2CInit()
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultArrow)) {
        if (huskylens.readeArrow(1, Content2.xTarget) > 140 && huskylens.readeArrow(1, Content2.xTarget) < 180) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 60)
        }
        if (huskylens.readeArrow(1, Content2.xTarget) < 140) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 30)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 90)
        }
        if (huskylens.readeArrow(1, Content2.xTarget) > 180) {
            DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 90)
            DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 30)
        }
    } else {
        DFRobotMaqueenPluss.mototStop(Motors.ALL)
    }
})
