---
id: gst-rounding
title: gst-rounding
sidebar_label: GST Rounding
hide_table_of_contents: true
---
## ref:
- https://claude.ai/share/6b0db536-8859-48a6-b8eb-58c985e44a07

## Banker's Rounding (Round Half to Even)

Banker's rounding (round half to even) rounds a number to the nearest even digit when the leftover fraction is exactly halfway (.5), preventing upward statistical bias over large datasets.

## Core Rules

- Standard cases: 
    - If the decimal is less than 0.5, round down. If it is greater than 0.5, round up.

- Exact .5 tie-breaker: 
    - Round to the nearest even number.If the preceding digit is even, round down (leave it).
    - If the preceding digit is odd, round up (make it even).

- Examples of Banker's Rounding (to the nearest whole number):
    - 1.5 → 2 (Preceding digit 1 is odd, so it rounds up to the nearest even number 2)
    - 2.5 → 2 (Preceding digit 2 is already even, so it rounds down to 2)
    - 3.5 → 4 (Preceding digit 3 is odd, so it rounds up to 4)
    - 4.5 → 4 (Preceding digit 4 is even, so it rounds down to 4)

- Examples with Decimal Places (to one decimal place):
    - 2.12 → 2.1 (Standard rule: 2 is less than 5)
    - 2.16 → 2.2 (Standard rule: 6 is greater than 5)
    - 2.125 → 2.12 (The preceding digit 2 is even, so it rounds down)
    - 2.135 → 2.14 (The preceding digit 3 is odd, so it rounds up)

## Banker's Rounding Examples for GST Rounding

4000/1.18<br/>
3389.83 => 9% => 305.08<br/>
305.08+305.08 => 610.16<br/>
4000-610.16 = 3389.84<br/>

3389.84 + 9%(305.0856) .085=>.09 so, 305.09<br/>

111.0 + 2.5% (2.775) .775 => .77, so 2.77<br/>
111.4 + 2.5% (2.785) .785 => .79, so 2.79<br/>
3389.84 + 9%(305.0856) .085=>.09 <br/>

if 3rd digit is 5, 2nd digit is even(0,2,4,6,8), then make 2nd digit to odd(1,3,5,7,9)<br/>
if 3rd digit is 5, 2nd digit is odd(1,3,5,7,9), then leave 2nd digit as it is<br/>


## Dart Implementation - Only for CGST & SGST Rounding
```dart
double roundGST(double amount, {int places = 2}) {
  final fixed = amount.toStringAsFixed(20); // reveal the true stored value
  final negative = fixed.startsWith('-');
  final clean = negative ? fixed.substring(1) : fixed;

  final dotIndex = clean.indexOf('.');
  final intPart = clean.substring(0, dotIndex);
  final fracPart = clean.substring(dotIndex + 1);

  final keep = fracPart.substring(0, places);
  final remainder = fracPart.substring(places);

  BigInt scaled = BigInt.parse(intPart + keep);
  final half = '5' + '0' * (remainder.length - 1);

  if (remainder.compareTo(half) > 0) {
    scaled += BigInt.one;
  } else if (remainder == half) {
    // genuine tie -> round to even
    if (scaled % BigInt.two != BigInt.zero) scaled += BigInt.one;
  }
  // else: remainder < half -> truncate, do nothing

  final result = scaled.toDouble() / _pow10(places);
  return negative ? -result : result;
}

double _pow10(int n) {
  double r = 1;
  for (var i = 0; i < n; i++) r *= 10;
  return r;
}

void main() {
  print(roundGST(2.775));   // 2.77
  print(roundGST(2.785));   // 2.79
  print(roundGST(100.125)); // 100.12
}
```

## C# Implementation - Only for CGST & SGST Rounding
```c#
using System;
using System.Globalization;

public static class GstRounding
{
    public static decimal RoundGST(double amount, int places = 2)
    {
        // G17 guarantees enough significant digits to reveal the double's true value
        string fullPrecision = amount.ToString("G17", CultureInfo.InvariantCulture);
        decimal exact = decimal.Parse(fullPrecision, CultureInfo.InvariantCulture);
        return Math.Round(exact, places, MidpointRounding.ToEven);
    }
}

class Program
{
    static void Main()
    {
        Console.WriteLine(GstRounding.RoundGST(2.775));   // 2.77
        Console.WriteLine(GstRounding.RoundGST(2.785));   // 2.79
        Console.WriteLine(GstRounding.RoundGST(2.773));   // 2.77
        Console.WriteLine(GstRounding.RoundGST(2.778));   // 2.78
        Console.WriteLine(GstRounding.RoundGST(2.783));   // 2.78
        Console.WriteLine(GstRounding.RoundGST(2.788));   // 2.79
        Console.WriteLine(GstRounding.RoundGST(100.125)); // 100.12
    }
}
```