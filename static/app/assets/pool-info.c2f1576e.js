import{_ as c}from"./CopyToClipboard.02e9f88b.js";import{a9 as f,q as d,aa as p,ab as _,ac as h,ae as e,aL as s,ad as u,al as m,an as t}from"./vendor.199eabdf.js";import{_ as w,d as P,n as b}from"./index.817270f0.js";const k=f({setup(){const o=P(),l=d(()=>{var a,n;return(n=(a=o.stakePoolAddress)==null?void 0:a.toBase58())!=null?n:""}),r=d(()=>o.fees);return{stakePoolAddress:l,fees:r,formatPct(a){return b.format(a)}}}}),F={class:"container q-pb-xl"},S=e("div",{class:"page-title"}," Stake Pool Info ",-1),g={class:"container q-pb-xl"},D=t(" Stake Pool: "),W={style:{wordBreak:"break-all"}},B=t(),v=e("br",null,null,-1),A=e("br",null,null,-1),I=t(" Epoch Fee: "),N=t(" of epoch rewards "),R=t(" Epoch Fee, starting next epoch: "),$=t(" of epoch rewards "),q=t(" Withdrawal: "),y=t(" of withdrawal amount "),L=t(" Withdrawal, starting next epoch: "),V=t(" of withdrawal amount "),C=t(" Instant Withdrawal: "),E=t(" of withdrawal amount "),O=t(" Instant Withdrawal, starting next epoch: "),Q=t(" of withdrawal amount "),T=t(" Stake Deposit Fee: "),j=t(" SOL Deposit Fee: "),z=t(" of deposit amount "),G=t(" SOL Deposit Referral Fee: "),H=t(" Stake Deposit Referral Fee: ");function J(o,l,r,a,n,K){const i=c;return p(),_(m,null,{default:h(()=>[e("div",F,[S,e("div",g,[D,e("b",W,s(o.stakePoolAddress),1),B,u(i,{text:o.stakePoolAddress},null,8,["text"]),v,A,e("p",null,[I,e("b",null,s(o.formatPct(o.fees.fee)),1),N]),e("p",null,[R,e("b",null,s(o.formatPct(o.fees.feeNext)),1),$]),e("p",null,[q,e("b",null,s(o.formatPct(o.fees.withdrawalFee)),1),y]),e("p",null,[L,e("b",null,s(o.formatPct(o.fees.nextStakeWithdrawalFee)),1),V]),e("p",null,[C,e("b",null,s(o.formatPct(o.fees.solWithdrawalFee)),1),E]),e("p",null,[O,e("b",null,s(o.formatPct(o.fees.nextSolWithdrawalFee)),1),Q]),e("p",null,[T,e("b",null,s(o.formatPct(o.fees.stakeDepositFee)),1)]),e("p",null,[j,e("b",null,s(o.formatPct(o.fees.solDepositFee)),1),z]),e("p",null,[G,e("b",null,s(o.formatPct(o.fees.solReferralFee)),1)]),e("p",null,[H,e("b",null,s(o.formatPct(o.fees.stakeReferralFee)),1)])])])]),_:1})}var Y=w(k,[["render",J]]);export{Y as default};
