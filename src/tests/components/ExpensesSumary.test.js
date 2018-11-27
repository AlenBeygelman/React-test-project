import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
 const wrapper =shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
 expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with mulitple expense', () => {
    const wrapper =shallow(<ExpensesSummary expenseCount={23} expensesTotal={2332423423425} />);
    expect(wrapper).toMatchSnapshot();
});