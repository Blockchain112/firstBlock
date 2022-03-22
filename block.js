class Block{
    // Konstruktor + parameter
    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp; //  Zeitstempel
        this.lastHash = lastHash; // Hash des vorhergehenden Blocks 
        this.hash = hash; // Eigener Hash
        this.data = data; // Daten
    }
    toString(){
        return `Block -
        Timestamp: ${this.timestamp}
        Last Hash: ${this.lastHash.substring(0,10)}
        Hash:      ${this.hash.substring(0,10)}
        Data:      ${this.data}`;
    }
}

module.exports = Block; // Export als Modul