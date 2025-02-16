import { convertAccounts } from '../../../converters'

describe('convertAccount', () => {
  it.each([
    [
      [
        {
          id: '5861772',
          providerId: 'deposit',
          legalNumber: '2630/155/800612',
          subproductCode: 'individualK_9062',
          mainAccountNumber: '26308000726977',
          mainAccountCurrency: 'UAH',
          balance: 0,
          startDate: '2016-05-17',
          endDate: '2016-06-17',
          productTitle: 'Вигідний місяць (UAH)',
          productSystemKey: 'individual_deposit',
          iban: 'UA963253650000026308000726977',
          currentInterestRate: 15,
          showAndOperationRule:
            {
              mainScreenShowAllowed: true,
              redirectToParentObjectAllowed: true,
              debitAllowed: false,
              debitAllowedAtOperationsList: [],
              creditAllowed: false,
              creditAllowedAtOperationsList: []
            },
          isBtnReplenishAvailable: 'false',
          minRefillAmount: 0,
          isBtnProlongationAvailable: 'false',
          description: 'Вигідний місяць (UAH)',
          bankName: 'АТ "КРЕДОБАНК"',
          isDebitBlocked: 'false',
          replenishmentPurpose: 'Поповнення депозиту за Угодою № 2630/155/800612 від 17.05.2016',
          regularInterestPaymentTermType: 'INSTANT',
          ownerName: 'САВЕНКО ВАЛЕРІЙ ОЛЕКСІЙОВИЧ',
          preTermCloseEnabled: 'true',
          earlyWithdrawlAllowed: false,
          term: { type: 'MONTH', value: 1 },
          autoProlongationAvailable: 'false',
          daysTillClose: '0',
          refillAllowed: false,
          isBtnWithdrawalAvailable: 'false',
          depTypeId: '9062',
          dealAmount: null,
          ownerTaxId: '2662911517',
          maxRefillAmount: 0,
          earlyWithdrawlLimit: 0,
          accruedInterest: 36885,
          tabCloseUseMessageNumber: '1',
          autoProlongationEnabled: false,
          bankId: '325365',
          isDealAgreementAvailable: 'false',
          capitalization: false,
          initialAmount: '3000000',
          ibanForReplenishment: 'UA96 325365 00000 26308000726977',
          isBtnCloseAvailable: 'false',
          regularInterestPayment: true,
          isActiveProduct: 'false',
          details:
            {
              id: '5861772',
              providerId: 'deposit',
              legalNumber: '2630/155/800612',
              subproductCode: 'individualK_9062',
              mainAccountNumber: '26308000726977',
              mainAccountCurrency: 'UAH',
              balance: 0,
              startDate: '2016-05-17',
              endDate: '2016-06-17',
              productTitle: 'Вигідний місяць (UAH)',
              productSystemKey: 'individual_deposit',
              iban: 'UA963253650000026308000726977',
              currentInterestRate: 15,
              showAndOperationRule:
                {
                  mainScreenShowAllowed: true,
                  redirectToParentObjectAllowed: true,
                  debitAllowed: false,
                  debitAllowedAtOperationsList: [],
                  creditAllowed: false,
                  creditAllowedAtOperationsList: []
                },
              isBtnReplenishAvailable: 'false',
              minRefillAmount: 0,
              isBtnProlongationAvailable: 'false',
              description: 'Вигідний місяць (UAH)',
              bankName: 'АТ "КРЕДОБАНК"',
              isDebitBlocked: 'false',
              replenishmentPurpose: 'Поповнення депозиту за Угодою № 2630/155/800612 від 17.05.2016',
              regularInterestPaymentTermType: 'INSTANT',
              ownerName: 'САВЕНКО ВАЛЕРІЙ ОЛЕКСІЙОВИЧ',
              preTermCloseEnabled: 'true',
              earlyWithdrawlAllowed: false,
              term: { type: 'MONTH', value: 1 },
              autoProlongationAvailable: 'false',
              daysTillClose: '0',
              refillAllowed: false,
              isBtnWithdrawalAvailable: 'false',
              depTypeId: '9062',
              dealAmount: null,
              ownerTaxId: '2662911517',
              maxRefillAmount: 0,
              earlyWithdrawlLimit: 0,
              accruedInterest: 36885,
              tabCloseUseMessageNumber: '1',
              autoProlongationEnabled: false,
              bankId: '325365',
              isDealAgreementAvailable: 'false',
              capitalization: false,
              initialAmount: '3000000',
              ibanForReplenishment: 'UA96 325365 00000 26308000726977',
              isBtnCloseAvailable: 'false',
              regularInterestPayment: true,
              isActiveProduct: 'false'
            }
        }
      ],
      [
        {
          account: {
            balance: 0,
            capitalization: false,
            endDateOffset: 1,
            endDateOffsetInterval: 'month',
            id: '5861772',
            instrument: 'UAH',
            payoffInterval: 'month',
            payoffStep: 1,
            percent: 15,
            startBalance: 30000,
            startDate: new Date('2016-05-17T00:00:00.000+03:00'),
            syncIds: [
              'UA963253650000026308000726977'
            ],
            title: 'Вигідний місяць (UAH)',
            type: 'deposit'
          },
          products: [
            {
              contractType: 'deposit',
              id: '5861772'
            }
          ]
        }
      ]
    ],
    [
      [
        {
          id: '8532672',
          providerId: 'deposit',
          legalNumber: '2630/05/875855',
          subproductCode: 'individualK_6321',
          mainAccountNumber: '263030049745',
          mainAccountCurrency: 'UAH',
          balance: 0,
          startDate: '2018-05-21',
          endDate: '2020-05-21',
          productTitle: 'ЗРОСТАННЯ он-лайн (UAH)',
          productSystemKey: 'individual_deposit',
          iban: 'UA133253650000000263030049745',
          currentInterestRate: 13.5,
          showAndOperationRule:
            {
              mainScreenShowAllowed: true,
              redirectToParentObjectAllowed: true,
              debitAllowed: false,
              debitAllowedAtOperationsList: [],
              creditAllowed: false,
              creditAllowedAtOperationsList: ['CONTRACT_TO_CONTRACT', 'MAKE_CONTRACT']
            },
          isBtnReplenishAvailable: 'true',
          minRefillAmount: 10000,
          isBtnProlongationAvailable: 'true',
          description: 'ЗРОСТАННЯ он-лайн (UAH)',
          bankName: 'АТ "КРЕДОБАНК"',
          isDebitBlocked: 'false',
          replenishmentPurpose: 'Поповнення депозиту за Угодою № 2630/05/875855 від 21.05.2018',
          regularInterestPaymentTermType: 'MONTH',
          ownerName: 'БІЛИЙ МАКСИМ МИКОЛАЙОВИЧ',
          preTermCloseEnabled: 'true',
          earlyWithdrawlAllowed: false,
          term: { type: 'MONTH', value: 24 },
          autoProlongationAvailable: 'true',
          daysTillClose: '0',
          refillAllowed: true,
          isBtnWithdrawalAvailable: 'false',
          depTypeId: '6321',
          dealAmount: null,
          ownerTaxId: '3079317175',
          maxRefillAmount: 10000000,
          earlyWithdrawlLimit: 0,
          accruedInterest: 420100,
          tabCloseUseMessageNumber: '1',
          autoProlongationEnabled: false,
          bankId: '325365',
          isDealAgreementAvailable: 'false',
          capitalization: true,
          initialAmount: '250000',
          ibanForReplenishment: 'UA13 325365 0000000 263030049745',
          isBtnCloseAvailable: 'false',
          regularInterestPayment: false,
          isActiveProduct: 'false',
          details:
            {
              id: '8532672',
              providerId: 'deposit',
              legalNumber: '2630/05/875855',
              subproductCode: 'individualK_6321',
              mainAccountNumber: '263030049745',
              mainAccountCurrency: 'UAH',
              balance: 0,
              startDate: '2018-05-21',
              endDate: '2020-05-21',
              productTitle: 'ЗРОСТАННЯ он-лайн (UAH)',
              productSystemKey: 'individual_deposit',
              iban: 'UA133253650000000263030049745',
              currentInterestRate: 13.5,
              showAndOperationRule:
                {
                  mainScreenShowAllowed: true,
                  redirectToParentObjectAllowed: true,
                  debitAllowed: false,
                  debitAllowedAtOperationsList: [],
                  creditAllowed: false,
                  creditAllowedAtOperationsList: ['CONTRACT_TO_CONTRACT', 'MAKE_CONTRACT']
                },
              isBtnReplenishAvailable: 'true',
              minRefillAmount: 10000,
              isBtnProlongationAvailable: 'true',
              description: 'ЗРОСТАННЯ он-лайн (UAH)',
              bankName: 'АТ "КРЕДОБАНК"',
              isDebitBlocked: 'false',
              replenishmentPurpose: 'Поповнення депозиту за Угодою № 2630/05/875855 від 21.05.2018',
              regularInterestPaymentTermType: 'MONTH',
              ownerName: 'БІЛИЙ МАКСИМ МИКОЛАЙОВИЧ',
              preTermCloseEnabled: 'true',
              earlyWithdrawlAllowed: false,
              term: { type: 'MONTH', value: 24 },
              autoProlongationAvailable: 'true',
              daysTillClose: '0',
              refillAllowed: true,
              isBtnWithdrawalAvailable: 'false',
              depTypeId: '6321',
              dealAmount: null,
              ownerTaxId: '3079317175',
              maxRefillAmount: 10000000,
              earlyWithdrawlLimit: 0,
              accruedInterest: 420100,
              tabCloseUseMessageNumber: '1',
              autoProlongationEnabled: false,
              bankId: '325365',
              isDealAgreementAvailable: 'false',
              capitalization: true,
              initialAmount: '250000',
              ibanForReplenishment: 'UA13 325365 0000000 263030049745',
              isBtnCloseAvailable: 'false',
              regularInterestPayment: false,
              isActiveProduct: 'false'
            }
        }
      ],
      [
        {
          account: {
            balance: 0,
            capitalization: true,
            endDateOffset: 2,
            endDateOffsetInterval: 'year',
            id: '8532672',
            instrument: 'UAH',
            payoffInterval: 'year',
            payoffStep: 2,
            percent: 13.5,
            startBalance: 2500,
            startDate: new Date('2018-05-21T00:00:00.000+03:00'),
            syncIds: [
              'UA133253650000000263030049745'
            ],
            title: 'ЗРОСТАННЯ он-лайн (UAH)',
            type: 'deposit'
          },
          products: [
            {
              contractType: 'deposit',
              id: '8532672'
            }
          ]
        }
      ]
    ]
  ])('converts deposit', (apiAccounts, accounts) => {
    expect(convertAccounts(apiAccounts)).toEqual(accounts)
  })
})
