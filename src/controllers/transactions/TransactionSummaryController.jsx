

const TransactionSummaryController = () => {
    const mapStateToProps = (state) => {
        return {
            transactions: state.transaction.transactions,
        }
    }

    return mapStateToProps; 
}

export default TransactionSummaryController; 