export class LateCheckInValidionError extends Error {
  constructor() {
    super(
      'the check-in can only be validated until 20 minutes of its creation.',
    )
  }
}
