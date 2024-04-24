import Warrior from "./Warrior"
import Clan from "./Clan"
import PowerClan from "./PowerClan"
import RedClan from "./RedClan"
import MomoClan from "./MomoClan"

describe("Warrior Clans", () => {

    it("Basic Clan allows anyone to join", () => {
        let grok = new Warrior(42)
        let clan = new Clan()
        expect(clan.join(grok)).toBeTruthy()
    })

    it("Power Clan allows only power>=70", () => {
        let grok = new Warrior(77)
        let clan = new PowerClan()
        expect(clan.join(grok)).toBeTruthy()
    })

    it("RedClan allows only red warriors", () => {
        let black = new Warrior(77, "black")
        let red   = new Warrior(77, "red")
        let clan =  new RedClan()
        expect(clan.join(black)).toBeFalsy()
        expect(clan.join(red)).toBeTruthy()
    })

    it("MomoClan allows only black warriors who speak Momo", () => {
        let roman = new Warrior(77, "black", "roman")
        let momon = new Warrior(77, "black", "momo")
        let clan =  new MomoClan()
        expect(clan.join(roman)).toBeFalsy()
        expect(clan.join(momon)).toBeTruthy()
    })

    
})