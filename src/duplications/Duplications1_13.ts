export class Hoge2 {
  log() {
    console.log('aaa');
    console.log('bbb');
    console.log('ccc');
    console.log('ddd');
    console.log('eee');
    console.log('aaa');
    console.log('bbb');
    console.log('ccc');
    console.log('ddd');
    console.log('eee');
    console.log('ccc');
    console.log('ddd');
  }

  log2() {
    () => {
      console.log('aaa');
      () => {
        console.log('aaa');
        () => {
          console.log('aaa');
          () => {
            console.log('aaa');
            () => {
              console.log('aaa');
              () => {
                console.log('aaa');
                () => {
                  console.log('aaa');
                  () => {
                    console.log('aaa');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
