export const getBalance = (chain, id) => {
    let balance = 0;
    chain.forEach(block => {
        block.transactions.forEach(transaction => {
            if (transaction.recipient == id) {
                balance += transaction.amount
            } if (transaction.sender == id) {
                balance -= transaction.amount
            }
        })
    })
    return balance;
}

export const getRecieved = (chain, id) => {
    const received = [];
    chain.forEach(block => {
        block.transactions.forEach(transaction => {
            if (transaction.recipient == id) {
                received.push(transaction)
            }
        })
    })
    return received
}

export const getSent = (chain, id) => {
    const received = [];
    chain.forEach(block => {
        block.transactions.forEach(transaction => {
            if (transaction.sender == id) {
                received.push(transaction)
            }
        })
    })
    return received
}