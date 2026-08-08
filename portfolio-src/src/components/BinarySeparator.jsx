const BINARY_ROWS = [
  '1011001 1100110 1001111 0100100',
  '0110101 0011010 1110001 1011011',
  '1101001 0101110 1001001 0110110',
]

export default function BinarySeparator({ text = 'customer operations' }) {
  return (
    <div className="binary-separator" aria-hidden="true">
      <span className="binary-separator__edge" />
      <div className="binary-separator__track">
        {BINARY_ROWS.map((row, index) => (
          <span key={row} className={`binary-separator__row binary-separator__row--${index + 1}`}>
            {row} {text} {row}
          </span>
        ))}
      </div>
      <span className="binary-separator__edge" />
    </div>
  )
}
