


export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month - 1;  // Ajustamos el mes, ya que en JavaScript los meses son 0-11
        this.day = day;
    }

    returnAge() {
        const today = new Date();
        const birthDate = new Date(this.year, this.month, this.day);

        let age = today.getFullYear() - birthDate.getFullYear();
        if (today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return `${this.name} is ${age} today!`;
    }
}
