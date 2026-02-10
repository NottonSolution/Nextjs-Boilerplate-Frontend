export interface TextAreaProps {
  label?: string;
  placeholder?: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  rows?: number;
  cols?: number;
  allowNewLine?: boolean;
  className?: string;
}

export default function TextArea({
  label,
  onChange,
  value,
  disabled,
  error,
  placeholder,
  allowNewLine = false,
  rows = 4,
  cols = 50,
  className,
}: TextAreaProps) {
  return (
    <>
      <div className="w-full pb-5 relative">
        <p>{label}</p>
        <textarea
          maxLength={400}
          disabled={disabled}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !allowNewLine) {
              e.preventDefault();
            }
          }}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`${className} w-full px-2 py-2 rounded-md text-lg outline-1 resize-none ${
            error
              ? "outline-[var(--error-border)]"
              : "outline-[var(--main-border)] focus:outline-[var(--main-accent)] "
          } `}
          rows={rows}
          cols={cols}
        ></textarea>
        {error && <p className="absolute bottom-[-5] text-red-500">{error}</p>}
      </div>
    </>
  );
}
