function superbowlWin(record) {
    const winner = record.find(({ result }) => result === "W");
    return winner ? winner.year : undefined

}



