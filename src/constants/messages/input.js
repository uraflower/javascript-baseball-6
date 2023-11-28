import COMMON from '../common.js';
import RESTART_FLAG from '../restartFlag.js';

const INPUT = Object.freeze({
  number: '숫자를 입력해주세요 : ',
  restart: `게임을 새로 시작하려면 ${RESTART_FLAG.restart}, 종료하려면 ${RESTART_FLAG.exit}를 입력하세요.${COMMON.lineBreak}`,
});

export default INPUT;
