declare module "tiny-invariant" {
    function invariant(condition: any, message?: string): asserts condition;
    export default invariant;
  }
  